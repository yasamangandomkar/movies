import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa'
const Footer = () => {
  const menu = [
    { item: 'terms of use', icon: <FaFacebookF /> },
    { item: 'Privacy-policy', icon: <FaInstagram /> },
    { item: 'About', icon: <FaTwitter /> },
    { item: 'Blog', icon: <FaLinkedin /> },

  ]
  return (
    <div className="flex flex-col justify-center py-8 items-center mt-8  bg-black3 text-center w-full h-full space-y-5">

      <ul className="flex flex-col lg:flex-row gap-5 text-gray-200">
        {menu.map((item) => (
          <li className='hover:text-red-600' key={item.item}><a href="">{item.item}</a></li>
        ))}
      </ul>
      <p className='text-gray-400 text-sm lg:w-2/3 leading-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, odio. Repellat perferendis architecto a expedita repellendus! Maiores dolorum itaque ut labore totam alias illo! Officiis fuga vitae cum nobis totam!
      </p>
      <ul className='flex gap-5'>
        {menu.map((item) => (
          <li key={item.item} className='rounded-full p-2 bg-gray-700 text-white'>{item.icon}</li>
        ))}
      </ul>

    </div>
  )
}

export default Footer