import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Verification() {
  const location = useLocation();
  console.log("Current Location:", location);

  const verification_code = location.pathname.split("/").pop();
  console.log("Verification Code:", verification_code);

  const [isVerified, setIsVerified] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const verifyUser = async () => {
      try {
        const response = await fetch(`/api/verify/${verification_code}`);
        if (response.status === 200) {
          setIsVerified(true);
        } else {
          setIsVerified(false);
        }
      } catch (error) {
        console.error("Verification error:", error);
      }
    };

    verifyUser();
  }, [verification_code]);

  
  const handleVerifyClick = async () => {
    try {
      const response = await fetch(`/api/verify/${verification_code}`);
      const status = response.status;
      const body = await response.text();
      console.log('Verification status:', status);
      console.log('Verification response:', body);
      if (response.ok) {
        // Kullanıcı təsdiq edildi məsajı göstərilir
        alert("Təbriklər! Hesabınız uğurla doğrulandı!");
        // Ana səhifəyə yönləndir
        navigate("/");
      } else {
        console.error("Verification error:", response);
      }
      // Burada başqa əməliyyatlar da yerinə yetirilə bilər, məsələn, "Təsdiq olunur..." mesajını gizlətmək və ya hər hansı bir cavaba görə başqa addımlar görmək
    } catch (error) {
      console.error("Verification error:", error);
    }
  };
  
  return (
    <section className="verification">
      <div className="container">
        <>
          <h1>Hesabınızı doğrulayın</h1>
          {!isVerified ? (
            <button onClick={handleVerifyClick}>verify</button>
          ) : (
            <p>Təsdiq olunur...</p>
          )}
        </>
      </div>
    </section>
  );
}

export default Verification;
