function Comment() {
  return (
    <form className="mx-auto mb-10 flex max-w-2xl flex-col p-5">
      <h4 className="mb-2 text-xl font-bold text-green-500">
        Enjoyed the article?
      </h4>
      <h3 className="text-3xl font-bold">Leave a comment below</h3>
      <label className="mb-5 mt-4 block">
        <span className="block text-gray-700">Name</span>
        <input
          type="text"
          placeholder="John Doe"
          className="form-input mt-1 block w-full rounded border py-2 px-3 shadow outline-none ring-green-400 focus:ring"
        />
      </label>
      <label className="mb-5 block">
        <span className="block text-gray-700">Comment</span>
        <textarea
          rows={8}
          placeholder="Your Review is valuable to us"
          className="form-input mt-1 block w-full rounded border py-2 px-3 shadow outline-none ring-green-400 focus:ring"
        />
      </label>
    </form>
  )
}

export default Comment
