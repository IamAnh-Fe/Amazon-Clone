import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import authApi from "~/apis/authApi";

const ActivationEmail = () => {
  const { activation_token } = useParams();
 const [err, setErr] = useState("");
 const [success, setSuccess] = useState("");
    useEffect(() => {
      if (activation_token) {
        const activationEmail = async (activation_token) => {
          try {
            const res = await authApi.postActivationEmail({
              activation_token,
            });
            setSuccess(res.data.msg);
          } catch (err) {
            err.response.data.msg && setErr(err.response.data.msg);
          }
        };
        activationEmail();
      }
    }, [activation_token]);
  return <div>ActivationEmail</div>;
};

export default ActivationEmail;
