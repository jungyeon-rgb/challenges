import AddUserForm from "./components/AddUserForm";
import UserList from "./components/UserList";

function App() {
  return (
    <div className="container mx-auto p-12">
      <header>
        <h1 className="text-3xl font-black text-center">
          Thyroscope Challenges
        </h1>
      </header>

      <main>
        <section>
          <h2 className="text-xl font-bold mb-4">Add User</h2>
          <AddUserForm />
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-bold mb-4">Users</h2>
          <UserList />
        </section>
      </main>
    </div>
  );
}

export default App;
