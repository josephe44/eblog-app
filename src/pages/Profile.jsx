import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getAuth } from 'firebase/auth'
import {
  doc,
  collection,
  getDocs,
  query,
  where,
  orderBy,
  deleteDoc,
} from 'firebase/firestore'
import { db } from '../firebase.config'

function Profile() {
  const [listings, setListings] = useState(null)
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState('')

  const auth = getAuth()
  const navigate = useNavigate()

  useEffect(() => {
    setUser(auth.currentUser)
  }, [auth.currentUser])

  useEffect(() => {
    const fetchListing = async () => {
      const listingRef = collection(db, 'listings')
      const q = query(
        listingRef,
        where('userRef', '==', auth.currentUser.uid),
        orderBy('timestamp', 'desc')
      )
      const querySnap = await getDocs(q)
      let listings = []

      querySnap.forEach((doc) => {
        return listings.push({
          id: doc.id,
          data: doc.data(),
        })
      })

      setListings(listings)
      setLoading(false)
    }

    fetchListing()
  }, [auth.currentUser.uid])

  // LogOut the user
  const handleLogOut = () => {
    auth.signOut()
    navigate('/')
  }

  return (
    <div className="mt-4 text-[#1f1e24]">
      <div className="2xl:container mx-auto">
        <div className="grid md:grid-cols-2 sm:grid-cols-1 mx-4 justify-between place-items-center">
          <div className="w-full rounded-lg bg-yellow-400 ml-4 p-4">
            <h1 className="font-bold text-2xl">Personal Details</h1>
            <div className="mt-2">
              <h5 className="text-sm">
                <span>{user.displayName && 'Name : '}</span> {user.displayName}
              </h5>
              <p className="text-xs">
                <span className="font-bold text">{user.email && 'Email : '}</span>
                {user.email}
              </p>
            </div>
            <button
              onClick={handleLogOut}
              className="lg:w-1/2 w-full font-bold bg-[#1f1e24] text-white mt-6 p-2 rounded-xl hover:text-yellow-400 hover:scale-[0.98]"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
