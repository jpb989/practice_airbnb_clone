
const ConversationDetail = () => {
  return (
    <>
    <div className="max-h-[400px] overflow-auto flex flex-col space-y-4">
        <div className="w-[80%] py-4 px-6 rounded-xl bg-gray-200">
          <p className="font-bold text-gray-500">John Doe</p>
          <p>gwhrthreh</p>
        </div>
    </div>

    <div className="max-h-[400px] ml-[20%] overflow-auto flex flex-col space-y-4">
        <div className="w-[80%] py-4 px-6 rounded-xl bg-blue-200 ml-auto">
          <p className="font-bold text-gray-500">John Doe</p>
          <p>gwhrthreh</p>
        </div>
    </div>
    </>
  )
}

export default ConversationDetail;