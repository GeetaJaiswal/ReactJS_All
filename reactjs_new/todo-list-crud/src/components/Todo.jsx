import React, {useState}from 'react';
import {Button,List} from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import AddIcon from '@material-ui/icons/Add';
import Lists from '../components/Lists';

const Todo = () => {

    const [inputData,setInputData] = useState();
    const [items,setItems] = useState([ ]);
    console.log(inputData);

    const addItem = () => {
        setItems((oldData) => {              // means this function having all previous values we have in state
            return([...oldData, inputData]);
        });
        setInputData("");
    }

    const deleteItem = (id) => {
        console.log(id);
         setItems((oldItems) => {
            return oldItems.filter((itemVal, index) => {
                return index!== id;
            });
        });
    };

    const removeAll = () => {
        setItems([]);
    }

    const editItem = (id) => {

    }

    return (
        <>
            <div className="row">
                <div className="col-lg-4"></div>
                <div className="col-lg-4 box">
                
                  <h5>your todo list</h5>
                    <input type="text" placeholder="write here..." value={inputData}
                     onChange={(e)=>setInputData(e.target.value)}/>
                    <AddIcon className="add-icon" onClick={addItem}/>
                    {items.map((itemVal,index)=>{
                            return (
                                <>
                            <div className="list" key={index}>
                                <List>
                                <Lists id={index} key={index} text={itemVal} onSelect={deleteItem} onEdit={editItem}/>
                                </List>
                            </div>
                                </>
                            );
                            })
                        }
                        <Button variant="contained" className="delete-all" data-sm-link-text="remove All" onClick={removeAll}>
                        <DeleteForeverIcon className="delete-all-icon"/><span>Delete All</span></Button>
                    
                </div>
                <div className="col-lg-4"></div>
            </div>
        </>
    );
}

export default Todo;
