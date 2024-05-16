import { IconRefresh , IconDotsVertical, IconChevronLeft, IconChevronRight} from "@tabler/icons-react";
import MessageItem from "./MessageItem";
import { formatDate } from "../../utils/utils";
import Compose from "./Compose";
const messages = [
  { sender: "John Doe", subject: "Meeting Tomorrow", body: "Hi team,\n\nJust a reminder that we have a meeting scheduled for tomorrow at 10:00 AM. Please make sure to prepare any necessary materials beforehand.\n\nBest regards,\nJohn", createdAt: new Date().toISOString() },
  { sender: "Jane Smith", subject: "Project Update", body: "Hello,\n\nI wanted to provide you with an update on the progress of the project. We've completed the initial phase and are moving on to the next stage. I'll keep you updated on any further developments.\n\nRegards,\nJane", createdAt: new Date().toISOString() },
  { sender: "David Johnson", subject: "Vacation Request", body: "Hi Manager,\n\nI would like to request vacation leave from July 15th to July 30th. Please let me know if this would be possible.\n\nThank you,\nDavid", createdAt: new Date().toISOString() },
  { sender: "Emily Brown", subject: "Reminder: Task Deadline", body: "Hi Team,\n\nJust a friendly reminder that the deadline for completing Task #123 is approaching. Let's make sure to finish it on time.\n\nBest,\nEmily", createdAt: new Date().toISOString() },
  { sender: "Alex Wilson", subject: "New Product Launch", body: "Dear Customers,\n\nWe're excited to announce the launch of our new product line! Visit our website to learn more and place your orders.\n\nRegards,\nAlex", createdAt: new Date().toISOString() },
  { sender: "Olivia Lee", subject: "Upcoming Event", body: "Hi All,\n\nDon't forget about the team-building event happening this Friday! We'll have food, games, and lots of fun activities planned. See you there!\n\nCheers,\nOlivia", createdAt: new Date().toISOString() },
  { sender: "Michael Clark", subject: "Invoice Due", body: "Dear Customer,\n\nThis is a reminder that your invoice #123 is due for payment on July 25th. Please ensure timely payment to avoid any late fees.\n\nThank you,\nMichael", createdAt: new Date().toISOString() },
  { sender: "Sophia Martinez", subject: "Feedback Request", body: "Hi,\n\nWe're conducting a survey to gather feedback on our recent service improvements. Your input is valuable to us. Please take a moment to complete the survey.\n\nRegards,\nSophia", createdAt: new Date().toISOString() },
  { sender: "William Taylor", subject: "Job Opportunity", body: "Hello,\n\nWe're currently hiring for the position of Senior Software Engineer. If you're interested or know someone who might be a good fit, please let us know.\n\nBest regards,\nWilliam", createdAt: new Date().toISOString() },
  { sender: "Ava Anderson", subject: "Important Update: Policy Changes", body: "Hi Team,\n\nI wanted to inform you about some changes to our company policies regarding remote work. Please review the attached document for details.\n\nThanks,\nAva", createdAt: new Date().toISOString() },
  { sender: "Michael Clark", subject: "Invoice Due", body: "Dear Customer,\n\nThis is a reminder that your invoice #123 is due for payment on July 25th. Please ensure timely payment to avoid any late fees.\n\nThank you,\nMichael", createdAt: new Date().toISOString() },
];

const MessageContainer = () => {
  return <div className="px-4 py-2 mx-2 w-full bg-white h-full rounded-2xl">
    <div className="flex justify-between items-center py-2">
      <div className="flex justify-center items-center gap-4">
        <input type="checkbox" className="form-checkbox h-4 w-4"></input>
        <IconRefresh size={18}/>
        <IconDotsVertical size={18}/>
      </div>
      <div className="flex justify-center items-center gap-4">
        <div className="text-xs text-gray-600">1-50 to 200</div>
        <IconChevronLeft size={18}/>
        <IconChevronRight size={18}/>
      </div>
    </div>
    <div className="mt-2">
      {
        messages.map((el, index)=>(
        <MessageItem key={index} sender={el.sender} subject={el.subject} body={el.body} createdAt={formatDate(el.createdAt)}/>
        ))
      }
    </div>
    <Compose/>
  </div>;
};

export default MessageContainer;
