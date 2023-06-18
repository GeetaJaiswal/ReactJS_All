import React from 'react';
import Cards from './Cards';
import Sdata from './Sdata';


const Amazon = () => (     //Fat Arrow Method
            <>
                            <Cards
                                    key = {Sdata[4].id}
                                    imgsrc = {Sdata[4].imgsrc}
                                    category = {Sdata[4].category}
                                    title = {Sdata[4].title}
                                    link = {Sdata[4].link}
                            />
                    
            </>
        );

        export default Amazon;