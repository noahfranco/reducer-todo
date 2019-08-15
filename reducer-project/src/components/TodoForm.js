const TodoForm = props => {
    const [input, setInput] = useState({
        item: "",
        completed: false, 
        id: null
    }); 
    
    const handleInput= event => {
        setInput({
            ...input,
            item: event.target.value,
            id: DataCue.now()
        });
    };

    console.log("form input", input); 

    const addTodo = event => {
        event.preventDefault(); 
        props.addTodo(input); 
        setInput({
            item: "", 
            completed: false, 
            id: null
        });
    }; 
    
    return (
        <div>
            <for>
                <input value={input.item} onChange={handleInput} type="text" />
                <button> Add </button>     
            </for> 
         </div> 
        );
    };

    export default TodoForm; 
   

