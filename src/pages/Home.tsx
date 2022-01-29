// Webpach - Module Bundler
import illustrationImg from '../assets/imgs/illustration.svg';
import logoImg from '../assets/imgs/logo.svg';
import googleIconImg from '../assets/imgs/google-icon.svg';
import '../styles/auth.scss'
import { Button } from '../components/Button';

import { useNavigate } from 'react-router-dom';

export function Home() {
    const history = useNavigate();

    function navigateToNewRoom() {
        history('/rooms/new');
    }
    

    return (
        <div id="page-auth">
            <aside>
                <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas"/>
                <strong>Crie salas Q&amp;A ao-vivo</strong>
                <p>Tire as dúvidas da sua audiência em tempo-real</p>
            </aside>

            <main>
                <div className="main-content">
                    <img src={logoImg} alt="Letmeask" />
                    <button onClick={navigateToNewRoom} className="create-room">
                        <img src={googleIconImg} alt="Logo do Google" />
                        Crie sua sala com o Google   
                    </button>
                    <div className="separator"> ou entre em uma sala</div>
                    <form>
                        <input
                        type="text"
                        placeholder="Digite o código da sala"
                        />
                        <Button type="submit">
                            Entrar na sala
                        </Button>
                    </form>
                </div>
            </main>
        </div>

    );
}