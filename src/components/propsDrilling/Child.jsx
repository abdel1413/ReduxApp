import { Grandchild } from "./GrandChild";



export const  Child = ({ greeting, response }) => {
  return <Grandchild greeting={greeting} response={response} />;
};
