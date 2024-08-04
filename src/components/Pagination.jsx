import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
const Pagination = () => {

    const {page,handlePageChange,totalPages} = useContext(AppContext);

  return (
    <div className='w-full flex justify-center items-center border-t shadow-md fixed bottom-0 bg-white'>
            <div className='flex justify-between w-11/12 max-w-[500px] py-2'>
                <div className='flex gap-x-2'>
                    {page > 1 && (
                        <button
                            className='rounded-md border-2 px-4 py-1 text-sm bg-blue-500 text-white hover:bg-blue-600 transition duration-300'
                            onClick={() => handlePageChange(page - 1)}
                        >
                            Previous
                        </button>
                    )}
                    {page < totalPages && (
                        <button
                            className='rounded-md border-2 px-4 py-1 text-sm bg-blue-500 text-white hover:bg-blue-600 transition duration-300'
                            onClick={() => handlePageChange(page + 1)}
                        >
                            Next
                        </button>
                    )}
                </div>
                <p className='font-bold text-sm'>
                    Page {page} of {totalPages}
                </p>
            </div>
        </div>
    );
}

export default Pagination
