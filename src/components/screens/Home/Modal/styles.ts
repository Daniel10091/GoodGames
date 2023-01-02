import { StyleSheet } from 'react-native';
import { Theme } from '../../../../assets/styles';

const styles = StyleSheet.create({
  modal: {
    flex: 1,
  },
  modalBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  modalContent: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Theme.Colors.White,
    shadowColor: Theme.Colors.Black,
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    overflow: 'hidden',
    zIndex: 1,
  },

  // TopBar styles
  modalTopBar: {
    width: '100%',
    backgroundColor: Theme.Colors.Amethyst
  },
  modalButton: {
    width: '100%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalButtonIcon: {
    fontSize: 36,
    color: Theme.Colors.White,
  },

  // Header styles
  modalHeader: {
    width: '100%',
    alignItems: 'center',
    paddingVertical: 14,
  },
  modalHeaderTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Theme.Colors.Charcoal,
  },

  // Body styles
  modalBody: {
    paddingHorizontal: 10,
  },
  modalBodyText: {
    textAlign: 'justify',
  },

  // Footer styles
  modalFooter: {
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  startGameButton: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Theme.Colors.MagentaCrayola,
    borderRadius: 10,
  },
  startGameButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Theme.Colors.White,
  },
});

export default styles;
