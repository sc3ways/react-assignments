import AssignmentCard from "../components/AssignmentCard";

const Assignments = () => {
  const assignments = [
    {
      id: "001",
      img: "images/calculator.png",
      title: "Calculator",
      text: "Basic calculators can do only addition, subtraction, multiplication and division mathematical calculations.",
      url: "/react-assignment/calculator",
    },
    {
      id: "002",
      img: "images/todo-img.png",
      title: "Todo List",
      text: "List everything that you have to do, with the most important tasks at the top, and the least important tasks at the bottom. ",
      url: "/react-assignment/todolist",
    },
  ];
  return (
    <div className="assignments py-4">
      <div className="container">
        <h1>Assignments</h1>
        <div className="assignment-block mt-4">
          <div className="row">
            {assignments.map((card) => (
              <AssignmentCard key={card.id} item={card} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Assignments;
