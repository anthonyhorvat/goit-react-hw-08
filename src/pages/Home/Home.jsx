import { AppInfo, Button, AppName } from "./Home.styled";

export default function Home() {
  return (
    <div>
      <AppInfo>
        <p>
          <AppName>Phone Book App</AppName> - your universal tool for storing
          contacts.
        </p>
        <p>
          Conveniently manage your contacts, add new friends and business
          partners, quickly find the information you need.
        </p>
        <Button to="/contacts">Get Started</Button>
      </AppInfo>
    </div>
  );
}
