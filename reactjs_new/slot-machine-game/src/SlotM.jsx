import React from 'react';

const SlotM = (props) => {
    // let x = '😄';
    // let y = '😸';
    // let z = '😄';

    let x = props.x;
    let y = props.y;
    let z = props.z;

    //or let {x,y,z} = props;   //this is called object destructing

    if((x===y) && (y===z)){
        return(
            <>
                    <h4>
                        {x} {y} {z}
                    </h4>
                    <h4>This is Matching</h4>
                    <hr/>
            </>
        );
    }
    else{
        return(
            <>
                    <h4>
                        {x} {y} {z}
                    </h4>
                    <h4>This is not Matching</h4>
                    <hr/>
            </>
        );
    }
}

export default SlotM;