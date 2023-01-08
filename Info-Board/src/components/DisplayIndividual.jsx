import womenlogo from "../logo/woman.png";
import menlogo from "../logo/man.png";
import "../styles/individual.css";

const DisplayIndividual = ({studata}) => {
    // const [showpt,setShowPt] = useState(false)
    // const [stateofpt,setStateofPt] = useState("show-pic")   
    // const toggle = () => {
    //     showpt?setShowPt(false):setShowPt(true);
    //     stateofpt==="show-pic"?setStateofPt("hide-pic"):setStateofPt("show-pic");
    // <button onClick={() => toggle()}>{`${stateofpt}`}</button>
    //     //showpt ? `http://61.1.171.141/kiet/05photos/${studata.ID}.jpg` 
    // }

    return (
        <div className="Main-sec">
            
            <div className="logo-img" >
                    <img src={ studata.Gender==="F"?womenlogo:menlogo } alt="" /> 
                    
            </div>
        <div className="student-details">

            <section className="stu-name">
            <legend>Name:</legend>
            <p>{studata.Name}</p>
            </section>


            <section className="stu-roll">
            <legend>Roll Number:</legend>
            <p>{studata.ID}</p>
            </section>

            <section className="stu-gen">
            <legend>Gender:</legend> 
            <p>{studata.Gender==="F"?"Female":"Male"}</p>
            </section>

            <section className="stu-campus">
            <legend>Campus:</legend>
            <p>{studata.Campus}</p>
            </section>

            <section className="stu-team">
            <legend>Team Number:</legend>
            <p>{studata.Team_number}</p>
            </section>
            
            <section className="stu-contact">
            <legend>Contact Number:</legend>
            <p>{studata.Contact_num}</p>
            </section>
    
        </div>
        </div>
     );
}
 
export default DisplayIndividual;