import { useEffect, useState } from "react";

type Data = {
  message: string;
};

const Home = () => {
  const [text, setText] = useState<Data>();

  const getText = async () => {
    const res = await fetch(`/api/hello`);
    setText(await res.json());
  };
  useEffect(() => {
    getText();
  }, []);

  return <div>{text?.message}</div>;
};

export default Home;
