import { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { getDoc, doc } from 'firebase/firestore'
import { db } from '../firebase.config'
import Spinner from '../components/Spinner'

function Blog() {
  const [listing, setListing] = useState(null)
  const [loading, setLoading] = useState(true)

  const navigate = useNavigate()
  const params = useParams()

  useEffect(() => {
    const fetchListing = async () => {
      const docRef = doc(db, 'listings', params.blogId)
      const docSnap = await getDoc(docRef)

      if (docSnap.exists()) {
        setListing(docSnap.data())
        setLoading(false)
      }
    }
    fetchListing()
  }, [navigate, params.blogId])

  if (loading) {
    return <Spinner />
  }

  return (
    <main className="container grid md:grid-cols-3 sm:grid-cols-1 gap-4 p-4  text-white mb-8">
      <div className="w-full p-2 bg-[#1f1e24] rounded-lg md:col-span-2 sm:col-span-1">
        <img
          className="h-96 w-full rounded-lg"
          src={listing.imageUrls}
          alt="blogImage"
        />
        <div className=" mt-4 mx-2">
          <p className="text-sm mb-2">
            <span className="text-yellow-400 mr-2">
              <i className="fa-solid fa-clock"></i>
            </span>
            {listing.date}
          </p>
          <h1 className="text-4xl font-bold mb-4">{listing.title}</h1>
          <p className="mt-4">{listing.article}</p>
        </div>
        <hr className="m-2" />
        <div className="flex justify-between items-center mt-4 mx-2 mb-4 text-center">
          <div className="text-sm font-semibold">
            <h1>
              <span className="text-yellow-400 mr-2">
                <i className="fa-solid fa-user text-xs"></i>
              </span>
              by {listing.author}
            </h1>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Blog
