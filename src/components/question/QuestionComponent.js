import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { fetchTaskById } from '../../api/client';
// TODO: Import any API functions you need from '../../api/client'
// Example: import { get, post } from '../../api/client';

function QuestionComponent() {
  // TODO: Define state variables needed for your question set
  const {id} = useParams();
  const [task,setTask] = useState(null);
  const[loading,setLoading] = useState(true);
  useEffect(() =>{
    const getTask = async()=>{
      const data = await fetchTaskById(id);
      setTask(data);
      setLoading(false);
    };
    if (id) getTask();
  },[id]);
  if (loading) return <div> Loading</div>;
  if (!task) return <div> Task not found</div>;
  return(
    <div className='task' >
      <h2> Task Details</h2>
      <p> id : {task._id}</p>
      <p> title: {task.title}</p>
      <p> Description : {task.description}</p>
      <p> Status: {task.status}</p>
    </div>
  );
};

  // TODO: Implement data fetching inside a useEffect hook
  

  // TODO: Implement any event handlers required by your question set
  

 

export default QuestionComponent;
