import { FC, useState } from "react";
import "./app.css";
import { Nav } from "./components/Nav";
import { SearchUser } from "./components/SearchUser";
import { InfoUser } from "./components/InfoUser";
import { useUser } from "./hooks/useUser";

const App: FC = () => {
  const [search, setSearch] = useState<string>("");
  const { getUser, user, isLoading, hasError, textError } = useUser();

  const updateSearch = (user: string) => {
    setSearch(user);
  };

  return (
    <main className="main">
      <Nav />
      <SearchUser
        updateSearch={updateSearch}
        search={search}
        getUser={getUser}
      />
      <InfoUser
        user={user}
        isLoading={isLoading}
        hasError={hasError}
        textError={textError}
      />
    </main>
  );
};

export default App;
