import { useState, useEffect, useRef } from 'react';
import productApi from '~/apis/productApi';
import ReactImageMagnify from 'react-image-magnify';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import InfoProduct from '../components/InfoProduct';
import CartProduct from '../components/CartProduct';
import { addToCart } from '~/features/Cart/CartSlice';
import Review from '../components/Review';
import { toast } from 'react-toastify';

const DetailPage = () => {
    let productId = useParams();
    const id = productId.id;
    const [Loading, setLoading] = useState(true);
    const [product, setProduct] = useState([]);
    const [quantity, setQuantity] = useState(1);
    const [img, setImg] = useState();
    const dispatch = useDispatch();

    const hoverHandler = (image, i) => {
        setImg(image.url);
        refs.current[i].classList.add('active');
        for (var j = 0; j < product.images.length; j++) {
            if (i !== j) {
                refs.current[j].classList.remove('active');
            }
        }
    };
    const refs = useRef([]);
    refs.current = [];
    const addRefs = (el) => {
        if (el && !refs.current.includes(el)) {
            refs.current.push(el);
        }
    };

    useEffect(() => {
        const fetchProductDetail = async () => {
            try {
                const result = await productApi.getProductId(id);
                console.log('Fetch products successfully: ', result);
                const data = result ? result : '';
                setProduct(data);
                setImg(data.images[0].url);
            } catch (error) {
                console.log('Failed to fetch product list: ', error);
            }
            setLoading(false);
        };
        fetchProductDetail();
    }, [id]);

    if (Loading) {
        return <h2>Loading</h2>;
    }

    const handleDecrement = () => {
      if (quantity > 1) {
        setQuantity((prev) => prev - 1);
      }
    };
    const handleIncrement = () => {
        setQuantity((prev) => prev + 1);
      };
      const handleAđdToCartSubmit = () => {
          const action = addToCart({
              id: product._id,
              product,
              quantity: quantity,
          });
          console.log('check action: ', action);
          toast.success('Product added to cart successfully');
          dispatch(action);
      };

    return (
        <div className="container">
            <div className="detailProduct">
                <div className="detailProduct-list row">
                    <div className="detailProduct-thumbnail col l-5 m-6">
                        <div className="detailProduct-smallImage ">
                            {product &&
                                product.images.length > 0 &&
                                product.images.map((image, i) => (
                                    <div
                                        className={i == 0 ? 'detailProduct-img active ' : 'detailProduct-img'}
                                        key={i}
                                        onMouseOver={() => hoverHandler(image, i)}
                                        ref={addRefs}
                                    >
                                        <img className="detailProduct-img" src={image.url} alt="detailImg" />
                                    </div>
                                ))}
                        </div>
                        <div className="detailProduct-largeImage">
                            <ReactImageMagnify
                                {...{
                                    smallImage: {
                                        alt: 'image-Product',
                                        isFluidWidth: true,
                                        src: img,
                                    },
                                    largeImage: {
                                        src: img,
                                        width: 1200,
                                        height: 1800,
                                    },
                                    shouldUsePositiveSpaceLens: true,

                                    enlargedImageContainerDimensions: {
                                        width: '150%',
                                        height: '150%',
                                    },
                                }}
                            />
                        </div>
                    </div>
                    <div className="detailProduct-info col l-7 m-6">
                        <div>
                            <InfoProduct product={product} />
                            <div className="shoppingCart-quantity">
                                <span className="shoppingCart-btn" onClick={handleDecrement}>
                                    -
                                </span>
                                <span className="shoppingCart-number">{quantity}</span>
                                <span className="shoppingCart-btn" onClick={handleIncrement}>
                                    +
                                </span>
                            </div>
                            <button className="detailProduct-cart" onClick={handleAđdToCartSubmit}>
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <Review />
                </div>
            </div>
        </div>
    );
};

export default DetailPage;
