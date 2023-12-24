import Styles from "./page.module.css";

export default function Home() {
  return (
    <main className={Styles.main}>
      <div>
     
        <User name="Alice" />
        <User name="Bob" />
        <User name="Charlie" />
        <User name="David" />
        <User name="Eva" />
        <User name="Frank" />
        <h1 className="heading">Hi <User name="Hiiiiii"/></h1>
      </div>
    </main>
  );
}



const User = (props :any) => {
  return (
    <>
      <h1>My name is {props.name}</h1>
    </>
  );
};

export {User};
