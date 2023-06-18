import React from 'react';
import Cards from './Cards';
import Sdata from './Sdata';


const Netflix = () => (     //Fat Arrow Method
            <>
                            <Cards
                                    key = {Sdata[1].id}
                                    imgsrc = {Sdata[1].imgsrc}
                                    category = {Sdata[1].category}
                                    title = {Sdata[1].title}
                                    link = {Sdata[1].link}
                            />
                    );
                   
            </>
        );

        export default Netflix;