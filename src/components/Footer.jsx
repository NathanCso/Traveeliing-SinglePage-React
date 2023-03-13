import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { TiSocialPinterest } from 'react-icons/ti';

const Footer = () => {
  return (
    <div className='w-full mt-24 bg-gray-900 text-gray-300 py-2 px-2'>
      <div className='max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8 px-4'>
        <div>
          <h6 className='font-bold uppercare pt-2'>Solutions</h6>
          <ul>
            <li className='py-1'>Voyage</li>
            <li className='py-1'>Réservation</li>
            <li className='py-1'>Vols</li>
            <li className='py-1'>Croisières</li>
          </ul>
        </div>
        <div>
          <h6 className='font-bold uppercare pt-2'>Aide</h6>
          <ul>
            <li className='py-1'>Prix</li>
            <li className='py-1'>Documentation</li>
            <li className='py-1'>Visites</li>
            <li className='py-1'>Remboursements</li>
          </ul>
        </div>
        <div>
          <h6 className='font-bold uppercare pt-2'>Entreprise</h6>
          <ul>
            <li className='py-1'>A propos</li>
            <li className='py-1'>Blog</li>
            <li className='py-1'>Emplois</li>
            <li className='py-1'>Les Partenaires</li>
          </ul>
        </div>
        <div>
          <h6 className='font-bold uppercare pt-2'>Legal</h6>
          <ul>
            <li className='py-1'>Réclamations</li>
            <li className='py-1'>Confidentialité</li>
            <li className='py-1'>Stratégies</li>
            <li className='py-1'>Conditions</li>
          </ul>
        </div>
        <div className='col-span-2 py-8 md:pt-2'>
          <p className='font-bold uppercase'>Abonnez vous à notre newsletter</p>
          <p className='py-4'>
          Les dernières offres, articles et ressources envoyés chaque semaine dans votre boîte de réception.
          </p>
          <form className='flex flex-col sm:flex-row'>
            <input className='w-full p-2 mr-4 rounded-md mb-4' type='email' placeholder='Entrez votre email..' />
            <button className='p-2 mb-4 rounded-md bg-blue-500'>Souscrire</button>
          </form>
        </div>
      </div>

      <div className='flex flex-col max-w-[1400px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500'>
        <p className='py-4'>2022 Experiences, LLC. All rights reserved</p>
        <div className='flex justify-between sm:w-[300px] pt-4 text-2xl'>
          <FaFacebook />
          <FaInstagram />
          <FaTwitter />
          <TiSocialPinterest size={30} />
        </div>
      </div>
    </div>
  );
};

export default Footer;