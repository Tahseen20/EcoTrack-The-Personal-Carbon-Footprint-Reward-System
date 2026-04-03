import { useNavigate } from "react-router-dom";
function Login(){
  const navigate = useNavigate();
  
  return (
    
    <div className="relative w-[1540px] h-[1024px] bg-[rgba(74,123,36,0.71)]">

      {/* Rectangle 1 */}
      <div className="absolute w-[1174px] h-[804px] left-[153px] top-[118px] bg-[#DFF7D0] opacity-75 border border-[#3F6A0A] rounded-[40px] shadow-md"></div>

      {/* Logo */}
      <img
        src="/logo.png"
        alt="logo"
        className="absolute w-[281px] h-[188px] left-[490px] top-[135px]"
      />
      {/* Login */}
      <p className="absolute w-[255px] h-[150px] left-[685px] top-[175px] text-[68px] leading-[95px] font-bold text-[#22611D]">
        Login
      </p>

      {/* Email Box */}
      <div className="absolute w-[635px] h-[78px] left-[447px] top-[323px] bg-[#F5F5F5] opacity-50 rounded-[75px]"></div>

      {/* Password Box */}
      <div className="absolute w-[635px] h-[78px] left-[447px] top-[442px] bg-[#F5F5F5] opacity-50 rounded-[75px]"></div>

      {/* Google Rectangle */}
      <div className="absolute w-[635px] h-[78px] left-[447px] top-[714px] bg-[#DFF7D0] opacity-50 border border-[#3E6B08] rounded-[75px]"></div>

      {/* Button */}
      <div className="absolute w-[349px] h-[88px] left-[586px] top-[573px] bg-[#3F6A0A] opacity-50 rounded-[75px]"></div>

      {/* Email Text */}
      <p className="absolute left-[493px] top-[341px] text-[30px] text-black">
        Email:
      </p>

      {/* Password Text */}
      <p className="absolute left-[493px] top-[454px] text-[30px] text-black">
        Password:
      </p>

      {/* Button Text */}
      <p className="absolute left-[643px] top-[593px] text-[32px] text-white font-bold">
        Start Exploring
      </p>

      {/* OR */}
      <p className="absolute left-[735px] top-[661px] text-[30px] font-bold text-white">
        or
      </p>

      {/* Google Image */}
      <img
        src="/image.png"
        alt="google"
        className="absolute w-[114px] h-[76px] left-[529px] top-[716px]"
      />
      {/* Continue with Google */}
      <p className="absolute w-[345px] h-[48px] left-[640px] top-[726px] text-[32px] leading-[48px] font-Rounded Mplus 1c Bold text-black">
      Continue with Google
      </p>
      <p className="absolute left-[520px] top-[830px] text-[20px]">
  Don’t have an account?{" "}
  <span
    className="text-green-800 font-semibold cursor-pointer"
    onClick={() => navigate("/signup")}
  >
    Sign up 
  </span>
</p>
<p className="absolute left-[810px] top-[830px] text-[20px] ">
        here
      </p>

    </div>
  );
};

export default Login;