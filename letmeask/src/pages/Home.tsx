import illustrationImg from '../assets/img/illustration.svg';
import logoImg from '../assets/img/logo.svg';
import googleIconImg from '../assets/img/google-icon.svg';

export function Home(){
    return(
        <div>
            <aside>
                <img src={illustrationImg} alt="Illustration of questions and answers" />
                <strong>Create a room for Q&amp;A</strong>
                <p>Get your doubts resolved in live time</p>
            </aside>
            <main>
                <div>
                    <img src={logoImg} alt="LetMeAsk" />
                    <button>
                        <img src={googleIconImg} alt="" />
                        Create a room with Google
                    </button>
                    <div>or enjoy a created room</div>
                    <form>
                        <input
                         type="text"
                         placeholder='Type a room code' 
                        />
                        <button type='submit'>
                            Enter room
                        </button>
                    </form>
                </div>
            </main>
        </div>
    )
}