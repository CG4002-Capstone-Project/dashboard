import React from 'react'
import BounceLoader from 'react-spinners/BounceLoader';

AppLoader = () => {
    return (
        <BounceLoader size={150} color={'red'} loading={true} />
    )
}

export default AppLoader

