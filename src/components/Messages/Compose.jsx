import { useState } from 'react';
import {
  IconX, IconArrowsMaximize, IconMinus, IconLock, IconPencil, IconBriefcase, IconMaximize,
  IconArrowsDiagonalMinimize, IconRotateClockwise, IconRotateClockwise2, IconPaperclip,
  IconStackPush, IconPencilSearch, IconMoodSmile, IconBrandGoogleDrive,
  IconPhotoScan, IconLayoutCollage, IconWriting, IconCalendar, IconDotsVertical, IconTrash,
  IconBaseline
} from "@tabler/icons-react";
import { useCompose } from '../ComposeContext';
import { CLOSE_COMPOSE } from "../../composeReducer";

const Compose = () => {
  const { state: { isOpen }, dispatch } = useCompose();
  const [isWriting, setIsWriting] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isCreated, setIsCreated] = useState(false);
  const [message, setMessage] = useState('');
  const [to, setTo] = useState('');
  const [subject, setSubject] = useState('');
  const [inputMessage, setInputMessage] = useState('');
  const [body, setBody] = useState('');
  const [isMinimized, setIsMinimized] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);

  const startWriting = () => {
    setInputMessage('');
    setIsWriting(true)
  };

  const cancelWriting = () => {
    setIsWriting(false);
    setInputMessage('');
  };

  const createMessage = () => {
    setIsLoading(true);
    setTimeout(() => {
      const sentences = [
        "Hello, how are you?",
        "This is a test message.",
        "I hope this works!",
        "Sending you a message...",
        "This is an important message."
      ];
      const randomSentence = sentences[Math.floor(Math.random() * sentences.length)];
      console.log(randomSentence);
      setMessage(randomSentence);
      setIsLoading(false);
      setIsCreated(true);
      setIsWriting(false);
    }, 2000);
  };

  const insertMessage = () => {
    setBody(prevBody => prevBody + '\n' + message);
    setMessage('');
    setIsCreated(false);
  };

  if (!isOpen) return null;

  const composeClassNames = [
    "absolute drop-shadow-lg bg-white rounded-2xl transition-all",
    isMinimized ? "bottom-2 right-20 h-12 w-72" : "bottom-2 right-[5%] h-[80%] w-[40%]",
    isMaximized && !isMinimized ? " h-[70%] w-[70%]" : "",
  ].join(" ");

  return (
    <div className={composeClassNames}>
      <div className="relative h-full w-full">
        <div className='w-full h-full'>
          <div className="flex justify-between py-2 px-4 bg-[#f6f8fc] rounded-t-2xl">
            <div className="text-sm font-medium">New Message</div>
            <div className="flex gap-2">
              <IconMinus size={18} color="#515356" className='cursor-pointer' onClick={() => setIsMinimized(!isMinimized)} />
              {isMaximized ? <IconArrowsDiagonalMinimize onClick={() => setIsMaximized(!isMaximized)} size={18} className='cursor-pointer'/> :<IconArrowsMaximize size={18} color="#515356" className='cursor-pointer' onClick={() => setIsMaximized(!isMaximized)} />}
              <IconX size={18} color="#515356" className='cursor-pointer' onClick={() => {
                setBody('');
                setInputMessage('');
                setMessage('');
                setTo('');
                setSubject('');
                cancelWriting()
                dispatch({ type: CLOSE_COMPOSE });
              }} />
            </div>
          </div>
          {!isMinimized && (
            <div className='px-4 h-[70%]'>
              <div className="flex items-center justify-between">
                <input
                  type="text"
                  className="border-none outline-none w-3/4 p-2"
                  placeholder="To"
                  value={to}
                  onChange={(e) => setTo(e.target.value)}
                />
                <IconLock size={18} color="#515356" />
              </div>
              <div className="flex items-center justify-between">
                <input
                  type="text"
                  className="border-none outline-none w-3/4 p-2"
                  placeholder="Subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
              </div>
              {
                !message && !isLoading && (
                  <textarea className='p-2 w-[97%] border-none outline-none h-full' value={body} onChange={(e) => setBody(e.target.value)}></textarea>
                )
              }
              {isLoading && (
                <div className="top-1/2 w-full text-center my-3">
                  <div role="status" className="animate-pulse px-4">
                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-400 w-48 mb-4"></div>
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-400 max-w-[360px] mb-2.5"></div>
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-400 mb-2.5"></div>
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-400 max-w-[330px] mb-2.5"></div>
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-400 max-w-[300px] mb-2.5"></div>
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-400 max-w-[360px]"></div>
                    <span className="sr-only">Loading...</span>
                  </div>
                </div>
              )}
              {message && !isLoading && (
                <div className='px-2'>
                  <div className="text-xs mt-2 border border-solid border-1 rounded-xl border-gray-300 p-2">
                    <div className='flex justify-between items-center'>
                      <div className='flex items-center'>
                        <IconPencil size={16} stroke={3} />
                        <div className='px-3 font-semibold'>{inputMessage}</div>
                      </div>
                      <div className='cursor-pointer' onClick={() => {
                        setIsCreated(false);
                        setIsWriting(true);
                        setMessage('');
                      }}><IconX size={14} /></div>
                    </div>
                    <div className='py-2'>{message}</div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
        {!isMinimized && (
          <div className="absolute bottom-0 w-full">
            {!isWriting && !isCreated && (
              <div className='px-4'>
                <div className="p-2 w-[250px] rounded-full flex justify-center items-center bg-[#f3f6fc]">
                  <div className="flex gap-4 items-center mx-2 text-xs">
                    <div className="p-2 flex justify-end items-center rounded-full hover:bg-gradient-to-r from-blue-200 to-green-200">
                      <IconPencilSearch size={14} />
                      <div className="px-2 cursor-pointer" onClick={startWriting}>Help me Write</div>
                    </div> |
                    <IconBriefcase size={14} color="gray" />
                    <IconMaximize size={14} color="gray" />
                    <IconArrowsDiagonalMinimize color="gray" size={14} />
                  </div>
                </div>
                <div className="py-2 flex items-center justify-between">
                  <div className='flex items-center gap-2'>
                    <button className="p-2 text-white rounded-full bg-blue-500 border-1 w-[100px] border-none text-xs">Send</button>
                    <div className='flex gap-3 child:p-1 child:rounded-sm child:cursor-pointer child-hover:bg-gray-300'>
                      <IconBaseline size={18} />
                      <IconStackPush size={18} />
                      <IconPaperclip size={18} />
                      <IconPencilSearch size={18} />
                      <IconMoodSmile size={18} />
                      <IconBrandGoogleDrive size={18} />
                      <IconPhotoScan size={18} />
                      <IconLayoutCollage size={18} />
                      <IconWriting size={18} />
                      <IconCalendar size={18} />
                      <IconDotsVertical size={18} />
                    </div>
                  </div>
                  <IconTrash onClick={()=>setBody('')} className='cursor-pointer' size={18} />
                </div>
              </div>
            )}
            {isWriting && (
              <div className='w-full flex justify-center items-center my-2'>
                <div className="flex items-center w-[95%] justify-between px-2 bg-[#f4f6fc] rounded-full">
                  <input
                    type="text"
                    className="relative border-none outline-none w-full py-4 bg-transparent"
                    placeholder="Write something..."
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                  />
                  <>
                    {!isLoading &&  <button className="p-2 px-3 cursor-pointer rounded-full bg-transparent text-gray-300 border-1 border-none text-xs font-medium" onClick={cancelWriting}>Cancel</button>}
                    <button className={`p-2 px-3 text-white rounded-full  ${inputMessage.length > 0 ? 'bg-blue-500' : 'text-gray-300'} border-1 border-none text-xs cursor-pointer ${inputMessage.length > 0 ? 'bg-blue-500' : 'bg-gray-300'}`} onClick={createMessage} disabled={!inputMessage.length}>{isLoading ? "Creating...": 'Create'}</button>
                  </>
                </div>
              </div>
            )}
            {isCreated && (
              <div className='w-full'>
                <div className='flex justify-between w-full rounded-full bg-[#f6f8fc] my-2 py-2'>
                  <div className='flex gap-2 p-2'>
                    <div onClick={createMessage} className='flex items-center cursor-pointer'><IconRotateClockwise2 size={14} /><div className='text-xs px-1'>Refine</div></div>
                    <div onClick={createMessage} className='flex items-center cursor-pointer'><IconRotateClockwise size={14} /><div className='text-xs px-1'>Recreate</div></div>
                  </div>
                  <button onClick={insertMessage} className='border-none mx-3 w-[100px] text-xs font-normal rounded-full bg-blue-500 text-white cursor-pointer'>Insert</button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Compose;
