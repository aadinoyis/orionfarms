const Toast = ({message}:{message: string}) => {

  return (
    <div className='fixed top-0 left-0 w-full flex flex-row items-center gap-8 bg-[#2d2df1] text-[#f0f0ff] px-8 py-4 rounded-sm'>
      {
        message
      }
    </div>
  )
}

export default Toast