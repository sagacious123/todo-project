import UserIcon from "../assets/images/user-img.svg";
import TrophyIcon from "../assets/images/trophy-icon.svg";
import { TodoItem } from "./TodoItem";
import { TodoList } from "./TodoList";

export const Sidebar = () => {
  return (
    <div className="todo-sidebar">
      <div className="todo-sidebar-header">
        <div className="todo-sidebar-header-container">
          <img src={UserIcon} alt="User" />
          <div>
            <h3>Hello John</h3>
            <h4>What are your plans for today?</h4>
          </div>
        </div>
      </div>
      <button className="upgrade-btn">
        <img src={TrophyIcon} alt="Trophy Icon" />
        <span>Go Pro Upgrade Now</span>
        <span className="price">$1</span>
      </button>
      <TodoList />
    </div>
  );
};
