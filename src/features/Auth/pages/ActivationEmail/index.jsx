import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import authApi from "~/apis/authApi";
import { toast } from "react-toastify";

const ActivationEmail = () => {
  const { activation_token } = useParams();
 const [err, setErr] = useState("");
  const [success, setSuccess] = useState("");

    useEffect(() => {
      if (activation_token) {
        const activationEmail = async () => {
          try {
            const res = await authApi.postActivationEmail({
              activation_token,
            });
            if (res) {
              toast.success("yeah")
            }
            setSuccess(res.data.msg);

          } catch (error) {
        
            error.response.data.msg && setErr(error.response.data.msg);
          }
        };
        activationEmail();
      }
    }, [activation_token]);
  return (
    <>
    
    </>
  );
};

export default ActivationEmail;
