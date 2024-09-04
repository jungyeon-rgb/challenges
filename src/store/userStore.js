import create from "zustand";

const useUserStore = create((set) => ({
  users: [
    {
      username: "John",
      email: "john@thyroscope.com",
      nickname: "moderator",
      gender: "male",
    },
    {
      username: "Steve",
      email: "steve@thyroscope.com",
      nickname: "comcivilian1",
      gender: "male",
    },
    {
      username: "Julie",
      email: "julie@thyroscope.com",
      nickname: "comcivilian2",
      gender: "female",
    },
  ],
  addUser: (newUser) =>
    set((state) => ({
      users: [...state.users, newUser],
    })),
  updateUser: (updatedUser, originalEmail) =>
    set((state) => ({
      users: state.users.map((user) =>
        user.email === originalEmail ? updatedUser : user
      ),
    })),
  deleteUser: (email) =>
    set((state) => ({
      users: state.users.filter((user) => user.email !== email),
    })),
}));

export default useUserStore;
