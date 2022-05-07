import './App.css';
import { useGlobalContext } from './context';
import Loading from './Loading';

function App() {
  const { isLoading, user, repos } = useGlobalContext();
  console.log(repos);
  if (isLoading) {
    return <Loading />;
  }

  const { login, avatar_url, name, location, email } = user;

  return (
    <div className='section-center'>
      <div className='profile'>
        <img src={avatar_url} alt='' />
        <div className='user-info'>
          <p>
            <span className='att'>Username : </span>
            <span className=''>{login} </span>
          </p>
          <p>
            <span className='att'>Full Name : </span>
            <span className=''>{name} </span>
          </p>
          <p>
            <span className='att'>Location : </span>
            <span className=''>{location} </span>
          </p>
          <p>
            <span className='att'>Email : </span>
            <span className=''>{email ? email : 'Unknown'} </span>
          </p>
        </div>
      </div>
      <div className='repos'>
        <h1>My Repos</h1>
        <div className='underline'></div>
        {repos.map((repo) => {
          console.log(repo);
          const { name, html_url } = repo;
          return (
            <article className='single-repo' key={repo.id}>
              <h2>{name}</h2>
              <a
                href={html_url}
                rel='noreferrer'
                target='_blank'
                type='button'
                className='btn'
              >
                See my source code
              </a>
            </article>
          );
        })}
      </div>
    </div>
  );
}

export default App;
