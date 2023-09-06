import { useEffect, useState, useRef } from 'react';
import Dialog from '@mui/material/Dialog';
import { Subscription } from 'rxjs';
import { dialogCloseSubject$, dialogOpenSubject$ } from './dialogSubjects';

interface Props {
  children: React.ReactNode;
}

const CustomDialog = ({ children }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
	const openSubject$Ref = useRef<Subscription | null>(null);
  const closeSubject$Ref = useRef<Subscription | null>(null);

  // let openSubject$ = new Subscription();
  // let closeSubject$ = new Subscription();

  useEffect(() => {
    openSubject$Ref.current = dialogOpenSubject$.getSubject.subscribe(() => handleClickOpen());
    closeSubject$Ref.current = dialogCloseSubject$.getSubject.subscribe(() => handleClose());
    return () => {
      if (openSubject$Ref.current) {
        openSubject$Ref.current.unsubscribe();
      }
      if (closeSubject$Ref.current) {
        closeSubject$Ref.current.unsubscribe();
      }
    };
  }, []);

  const handleClickOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleExit = () => {
    dialogCloseSubject$.setSubject = false;
  };

  return (
    <div>
      <Dialog
        open={isOpen}
        onClose={() => handleExit()}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth
      >
        {children}
      </Dialog>
    </div>
  );
};

export default CustomDialog