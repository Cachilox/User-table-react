import { useEffect } from "react";
import { People } from "@/data";
import { useAppDispatch } from "@/hooks";
import { PeopleTable } from ".";
import { addPeople } from "@/redux/states";

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(addPeople(People));
  }, [dispatch]);

  return (
    <>
      <PeopleTable />
    </>
  );
};

export default Home;
