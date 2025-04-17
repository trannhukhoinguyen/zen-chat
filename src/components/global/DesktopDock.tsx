import { useState } from 'react';
import { BsGithub, BsSpotify, BsTerminal, BsFilePdf, BsStickyFill } from 'react-icons/bs';
import { IoIosMail } from 'react-icons/io';
import { VscVscode } from 'react-icons/vsc';
import { RiTerminalFill } from 'react-icons/ri';
import ResumeViewer from './ResumeViewer';
import SpotifyPlayer from './SpotifyPlayer';
import GitHubViewer from './GitHubViewer';
import NotesApp from './NotesApp';
import { userConfig } from '../../config/userConfig';

export default function DesktopDock() {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);
  const [showResume, setShowResume] = useState(false);
  const [showSpotify, setShowSpotify] = useState(false);
  const [showGitHub, setShowGitHub] = useState(false);
  const [showNotes, setShowNotes] = useState(false);

  const handleEmailClick = () => {
    window.location.href = `mailto:${userConfig.contact.email}`;
  };

  const handleGithubClick = () => {
    setShowGitHub(true);
  };

  const handleCalendarClick = () => {
    window.open(userConfig.contact.calendly, '_blank');
  };

  const handleSpotifyClick = () => {
    setShowSpotify(true);
  };

  const handleVSCodeClick = () => {
    window.location.href = 'vscode:/';
  };

  const handleResumeClick = () => {
    setShowResume(true);
  };

  const handleNotesClick = () => {
    setShowNotes(true);
  };

  const handleCloseResume = () => {
    setShowResume(false);
  };

  const handleCloseSpotify = () => {
    setShowSpotify(false);
  };

  const handleCloseGitHub = () => {
    setShowGitHub(false);
  };

  const handleCloseNotes = () => {
    setShowNotes(false);
  };

  const Tooltip = ({ text }: { text: string }) => (
    <div className='absolute -top-14 left-1/2 -translate-x-1/2'>
      <div className='relative px-3 py-1 bg-[#1d1d1f]/80 backdrop-blur-sm text-white text-sm rounded-lg whitespace-nowrap border border-px border-gray-600'>
        {text}
        <div className='absolute left-1/2 -translate-x-1/2 -bottom-[7px] w-3 h-3 bg-[#1d1d1f]/80 backdrop-blur-sm rotate-45 border-b border-r border-gray-600' />
      </div>
    </div>
  );

  return (
    <>
      <div className='fixed bottom-0 left-1/2 -translate-x-1/2 hidden md:block z-50'>
        <div className='relative mb-2 p-3 bg-gradient-to-t from-gray-700 to-gray-800 backdrop-blur-2xl rounded-2xl'>
          <div className='flex items-end space-x-4'>
            {/* VSCode */}
            <button
              onClick={handleVSCodeClick}
              onMouseEnter={() => setHoveredIcon('vscode')}
              onMouseLeave={() => setHoveredIcon(null)}
              className='relative'
            >
              <div className='w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-lg'>
                <VscVscode size={45} className='text-blue-500' />
              </div>
              {hoveredIcon === 'vscode' && <Tooltip text='Launch VS Code' />}
            </button>

            {/* Email */}
            <button
              onClick={handleEmailClick}
              onMouseEnter={() => setHoveredIcon('email')}
              onMouseLeave={() => setHoveredIcon(null)}
              className='relative'
            >
              <div className='w-14 h-14 bg-gradient-to-t from-blue-600 to-blue-400 rounded-xl flex items-center justify-center shadow-lg'>
                <IoIosMail size={45} className='text-white' />
              </div>
              {hoveredIcon === 'email' && <Tooltip text='Email Me' />}
            </button>

            {/* Github */}
            <button
              onClick={handleGithubClick}
              onMouseEnter={() => setHoveredIcon('github')}
              onMouseLeave={() => setHoveredIcon(null)}
              className='relative'
            >
              <div className='w-14 h-14  bg-gradient-to-t from-black to-black/60 rounded-xl flex items-center justify-center shadow-lg'>
                <BsGithub size={45} className='text-gray-100' />
              </div>
              {hoveredIcon === 'github' && <Tooltip text='My Projects' />}
            </button>

            {/* Notes */}
            <button
              onClick={handleNotesClick}
              onMouseEnter={() => setHoveredIcon('notes')}
              onMouseLeave={() => setHoveredIcon(null)}
              className='relative'
            >
              <div className='w-14 h-14 bg-gradient-to-t from-yellow-600 to-yellow-400 rounded-xl flex items-center justify-center shadow-lg'>
                <BsStickyFill size={45} className='text-white' />
              </div>
              {hoveredIcon === 'notes' && <Tooltip text='Resume Notes' />}
            </button>

            {/* Resume */}
            <button
              onClick={handleResumeClick}
              onMouseEnter={() => setHoveredIcon('resume')}
              onMouseLeave={() => setHoveredIcon(null)}
              className='relative'
            >
              <div className='w-14 h-14 bg-gradient-to-t from-red-600 to-red-400 rounded-xl flex items-center justify-center shadow-lg'>
                <BsFilePdf size={45} className='text-white' />
              </div>
              {hoveredIcon === 'resume' && <Tooltip text='View Resume' />}
            </button>

            {/* Calendar */}
            <button
              onClick={handleCalendarClick}
              onMouseEnter={() => setHoveredIcon('calendar')}
              onMouseLeave={() => setHoveredIcon(null)}
              className='relative'
            >
              <div className='w-14 h-14 overflow-hidden shadow-lg'>
                <div className='absolute inset-0 bg-gradient-to-b from-white to-gray-200 rounded-xl'></div>

                <div className='absolute top-0 inset-x-0 h-5 bg-red-500 flex items-center justify-center rounded-t-xl'>
                  <span className='text-xs font-semibold text-white uppercase'>
                    {new Date().toLocaleString('en-US', { month: 'short' })}
                  </span>
                </div>

                <div className='absolute inset-0 flex items-end justify-center'>
                  <span className='text-3xl font-light text-black'>
                    {new Date().getDate()}
                  </span>
                </div>
              </div>
              {hoveredIcon === 'calendar' && <Tooltip text='Book a Call' />}
            </button>

            {/* Spotify */}
            <button
              onClick={handleSpotifyClick}
              onMouseEnter={() => setHoveredIcon('spotify')}
              onMouseLeave={() => setHoveredIcon(null)}
              className='relative'
            >
              <div className='w-14 h-14 bg-gradient-to-t from-black to-black/60 rounded-xl flex items-center justify-center shadow-lg'>
                <BsSpotify size={45} className='text-[#1ED760]' />
              </div>
              {hoveredIcon === 'spotify' && <Tooltip text={userConfig.spotify.playlistName} />}
            </button>

            {/* Divider */}
            <div className='flex items-center'>
              <div className='w-px h-14 bg-white/20' />
            </div>

            {/* Terminal */}
            <button
              onMouseEnter={() => setHoveredIcon('terminal')}
              onMouseLeave={() => setHoveredIcon(null)}
              className='relative'
            >
              <div className='w-14 h-14 bg-gradient-to-t from-black to-black/60 rounded-xl flex items-center justify-center shadow-lg'>
                <RiTerminalFill size={45} className='text-green-500' />
              </div>
              {hoveredIcon === 'terminal' && <Tooltip text='Terminal' />}
            </button>
          </div>
        </div>
      </div>

      <ResumeViewer isOpen={showResume} onClose={handleCloseResume} />
      <SpotifyPlayer 
        isOpen={showSpotify} 
        onClose={handleCloseSpotify} 
        playlistId={userConfig.spotify.playlistId}
      />
      <GitHubViewer isOpen={showGitHub} onClose={handleCloseGitHub} />
      <NotesApp isOpen={showNotes} onClose={handleCloseNotes} />
    </>
  );
}
