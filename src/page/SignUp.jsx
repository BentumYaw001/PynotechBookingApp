import { SignUpData } from "../components/Data";
import angledDown from "/src/assets/images/down-filled.svg";
import flag from "/src/assets/images/flag-ghana.svg";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();
  return (
    <>
      <div className="SignUp">
        <p>Create an account</p>
        <form action="">
          {SignUpData.map((item, index) => {
            return (
              <>
                {index === 2 ? (
                  <>
                    <div className="">
                      <label htmlFor="Phone Number">Phone No.</label>
                      <div className="Phone">
                        <div className="Icons Prefix">
                          <img src={flag} alt="" />
                          <img src={angledDown} alt="" className="ArrowDown" />
                          <input
                            type="number"
                            name="prefix"
                            id=""
                            placeholder="+233"
                            readOnly
                          />
                        </div>

                        <div className="Icons Suffix">
                          <img src="" alt="" />
                          <input
                            type="number"
                            name="suffix"
                            id=""
                            placeholder="1234567"
                          />
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <label htmlFor={item.name}>{item.label}</label>
                    <div className="Icons">
                      <img src={item.icon} alt="" />
                      <input
                        type={item.type}
                        name={item.name}
                        id={item.id}
                        placeholder={item.placeholder}
                      />
                    </div>
                  </>
                )}
              </>
            );
          })}
        </form>
        <button onClick={() => navigate("/home-screen")}>SIGN UP</button>
        <div className="LoginRedirect">
          <p>
            Already have an account?{" "}
            <span onClick={() => navigate("/signin-screen")}>Login</span>
          </p>
        </div>
      </div>
    </>
  );
}

export default SignUp;
