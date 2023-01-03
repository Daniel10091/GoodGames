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
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    overflow: 'hidden',
    zIndex: 1,
  },

  // TopBar styles
  modalTopBar: {
    width: '100%',
    backgroundColor: Theme.Colors.Amethyst,
    shadowColor: Theme.Colors.Black,
    shadowOpacity: 0.2,
    shadowRadius: 1,
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

  // Modal container
  modalContainer: {
    flex: 1,
    width: '100%',
  },

  // Game title styles
  gameTitleContent: {
    flex: 1,
    alignItems: 'center',
  },
  gameTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    textShadowColor: Theme.Colors.Amethyst,
    textShadowOffset: {
      width: 0,
      height: 0
    },
    textShadowRadius: 1,
  },

  // Body styles
  body: {
    flex: 1,
    paddingHorizontal: 14,
    paddingVertical: 14,
  },
  // Header styles
  header: {
    width: '100%',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Theme.Colors.DeepSpaceSparkle,
  },
  // Description styles
  bodyContent: {
    flex: 1,
    width: '100%',
    alignItems: 'flex-start',
  },
  caption: {
    textAlign: 'left',
    marginTop: 20,
    fontSize: 16,
    fontWeight: 'bold',
    color: Theme.Colors.DeepSpaceSparkle,
  },
  description: {
    textAlign: 'justify',
    marginTop: 20,
    color: Theme.Colors.DeepSpaceSparkle,
  },
  rulesContainer: {
    marginTop: 12,
    marginHorizontal: 10,
  },
  ruleContent: {
    flexDirection: 'row',
    marginTop: 10,
  },
  ruleIcon: {
    width: 6,
    height: 6,
    backgroundColor: Theme.Colors.Charcoal,
    borderRadius: 50,
  },
  rule: {
    textAlign: 'justify',
    marginLeft: 10,
    color: Theme.Colors.DeepSpaceSparkle,
  },

  // Footer styles
  modalFooter: {
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 14,
    paddingVertical: 14,
    // borderWidth: 1,
  },
  startGameButton: {
    width: '100%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Theme.Colors.MagentaCrayola,
    borderRadius: 10,
  },
  startGameButtonLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Theme.Colors.White,
  },
});

export default styles;
