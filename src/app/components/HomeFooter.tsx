import React, { PureComponent } from 'react'
import ContryLookup from './ContryLookup'

export default function HomeFooter(){
    return(
        <footer className='absolute bottom-0 text-xs text-gray-500 bg-[#f2f2f2] w-full '>
            <div className='border-b px-8 py-3'>
                <ContryLookup/>
            </div>
            <div className='flex flex-col sm:flex-row justify-between items-center px-8 py-3  '>
                <ul className='flex items-center space-x-6'>
                    <li className='link'>About</li>
                    <li className='link'>Advertising</li>
                    <li className='link'>Business</li>
                    <li className='link'>How Search works</li>
                </ul>

                <ul className='flex items-center space-x-6'>
                    <li className='link'>Privecy</li>
                    <li className='link'>Terms</li>
                    <li className='link'>Settings</li>
                </ul>

            </div>
            
        </footer>
    )
}