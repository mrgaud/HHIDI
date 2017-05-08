import React from 'react'
const title = (
	<h1 className='text-center text-muted'>Welcome To HHIDI</h1>
)
const about = (
    <div>
        <h3>
            HHIDI's (Heres How I Did It) goal is to allow people to share their personal stories of success or failure with a larger audience;
            in hopes that it will someday be red by somebody in need of a push in the right direction. All content on our site is free to whomsoever desires to use it.
        </h3>
        <h3>
            I first got the idea to make this when I was just comming out of a programming bootcamp. I was constantly looking for developers to share with me their
            stories of how they got into the buisness. So i thought wouldn't it be perfect if they could not only share them with me; But instead share them with the world
            in the hopes that they could help more people
        </h3>
    </div>
)
export default function ( ) {
	return (
		<div>
            {title}
            {about}
		</div>
	)
}
