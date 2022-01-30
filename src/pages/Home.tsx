import { firebase, auth } from '../services/firebase';
import { useContext } from 'react';

// Webpach - Module Bundler
import illustrationImg from '../assets/imgs/illustration.svg';
import logoImg from '../assets/imgs/logo.svg';
import googleIconImg from '../assets/imgs/google-icon.svg';
import '../styles/auth.scss'
import { Button } from '../components/Button';

import { useNavigate } from 'react-router-dom';

import { TestContext } from '../App';

export function Home() {
    const history = useNavigate();
    const {value, setValue} = useContext(TestContext);

    function handleCreateRoom() {

        const provider = new firebase.auth.GoogleAuthProvider();

        auth.signInWithPopup(provider).then(result =>{
            history('/rooms/new');
        });

    }
    
    return (
        <div id="page-auth">
            <aside>
                <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas"/>
                <strong>Crie salas Q&amp;A ao-vivo</strong>
                <p>Tire as dúvidas da sua audiência em tempo-real</p>
            </aside>

            <main>
                <h1>{value}</h1>
                <div className="main-content">
                    <img src={logoImg} alt="Letmeask" />
                    <button onClick={handleCreateRoom} className="create-room">
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