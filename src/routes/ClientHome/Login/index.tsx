import { useState } from "react";
import "./styles.css";
import { CredentialDTO } from "../../../models/auth";
import loginRequest from "../../../services/auth-service";

export default function Login() {

    const [formData, setFormData] = useState<CredentialDTO>({
        email: "",
        password: ""
    });

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        loginRequest(formData);
    };

    return (
        <main>
            <section id="login-section" className="dsc-container">
                <div className="dsc-login-form-container">
                    <form className="dsc-card dsc-form" onSubmit={handleSubmit}>
                        <h2>Login</h2>
                        <div className="dsc-form-controls-container">
                            <div>
                                <input className="dsc-form-control " type="text" placeholder="Email" onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                                <div className="dsc-form-error"></div>
                            </div>
                            <div>
                                <input className="dsc-form-control" type="password" placeholder="Senha" onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
                            </div>
                        </div>

                        <div className="dsc-login-form-buttons dsc-mt20">
                            <button type="submit" className="dsc-btn dsc-btn-blue">Entrar</button>
                        </div>
                    </form>
                </div>
            </section>
        </main>
    )
}

