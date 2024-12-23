import AssignmentCard from "../components/AssignmentCard";
import HeroSection from "../components/home/HeroSection";
import assignments from "../data/assignmentList.json";
const Home = () => {
  return (
    <div className="home-main">
      <HeroSection />
      <div className="assignments py-4">
        <div className="container">
          <h2>Assignments</h2>
          <div className="assignment-block mt-4">
            <div className="row">
              {assignments.map((card) => (
                <AssignmentCard key={card.id} item={card} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
