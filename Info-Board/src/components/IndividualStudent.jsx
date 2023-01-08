import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import DisplayIndividual from "./DisplayIndividual"
import Loading from "./Loading";
import { useSelector } from "react-redux";

const IndividualStudent = () => {
  const { id } = useParams();
  const url ="https://dhanasai-data.onrender.com/student/" + id;
  
  useFetch(url);

  const studata = useSelector((state)=>state.serverdata.data);
  const error = useSelector((state)=>state.serverdata.anyError);
  const isLoading = useSelector((state)=>state.serverdata.isLoading);
    

  return (
    <div>
      {error ? (
        <div className="error-logs">Failed to Fetch Data</div>
      ) : isLoading ? (
         <Loading/>
        ) : (
        (studata) && <DisplayIndividual studata={studata} />
      )}
    </div>
  );
};

export default IndividualStudent;