import React, { Fragment } from 'react';
import Avatar from 'avataaars';
import {Link} from 'react-router-dom';

const AvatarLogo = () => {
  return (
    <Fragment>
      <Link to="/">
      <Avatar
        avatarStyle='Transparent'
        topType='ShortHairTheCaesar'
        accessoriesType='Prescription01'
        hairColor='Brown'
        facialHairType='MoustacheFancy'
        facialHairColor='Platinum'
        clotheType='ShirtVNeck'
        clotheColor='White'
        eyeType='Cry'
        eyebrowType='SadConcernedNatural'
        mouthType='Concerned'
        skinColor='Brown'
      />
      </Link>
    </Fragment>
  )
}

export default AvatarLogo