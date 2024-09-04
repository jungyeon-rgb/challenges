import AddUserForm from './components/AddUserForm';
import UserList from './components/UserList';

function App() {
  return (
    <div className="container mx-auto p-12">
      <header>
        <h1 className='text-3xl font-black text-center'>Thyroscope Challenges</h1>
      </header>
      
      <main>
        <section>
          <h2 className='text-xl font-bold'>Add User</h2>
          <AddUserForm />
        </section>
        
        <section>
          <h2 className='text-xl font-bold'>Users</h2>
          <UserList />
        </section>
      </main>
    </div>
  );
}

export default App;
