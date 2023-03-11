import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { getTasks } from "../data-access/data-access";
import { urgentPriority, urgentPriorityCSS, normalPriority, normalPriorityCSS, otherPriorityCSS } from "../consts";

export function taskType (priority) {
  if (priority === urgentPriority){return urgentPriorityCSS;}
  if (priority === normalPriority){return normalPriorityCSS;}
  else {return otherPriorityCSS;}
};

function Home() {
  const navigate = useNavigate();

  const [listOfTasks, setListOfTasks] = useState([]);

  useEffect (() => {
    getTasks().then((data) => {
      setListOfTasks(data.data);
    })
  }, []);

    return (
      <div>
        {listOfTasks.map(value => {
          return (
              <div
                  className='task'
                  onClick={() => {
                    navigate(`/task/${value.id}`);
                    }
                  }
              >
                <div className={taskType(value.priority)}> {value.priority} </div>
                <div className='body'> {value.task} </div>
                <div className={taskType(value.priority)}></div>
              </div>
          );
        })}
    </div>
    )
}

export default Home;
