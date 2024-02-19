import { useState } from "react"
import { useNavigate } from "react-router-dom";


const Login = ({setUser}) =>{

    const [name, setName] = useState(" ");
    const [email, setEmail] = useState(" ");
    
    // useNavigate hook provided by react router dom
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(name,email);
        if(!name || !email) return;
        setUser({name : name, email: email});
        // navigate LoginPage to user dashboard using useNavigate hook provided by react router dom
        navigate('/dashboard');
        
    };

    return(
        <section className="section">
            <form className="form" onSubmit={handleSubmit}>
                <h5>Login</h5>
                <div className="form-row">
                    <label htmlFor="name" className="form-label">
                        Name
                    </label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-input" id="name" required />
                </div>
                <div className="form-row">
                    <label htmlFor="email" className="form-label">
                        Email
                    </label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-input" id="email" required />
                </div>
                <button type="submit" className="btn btn-block">Login</button>
            </form>
        </section>
    )
}
export default Login;