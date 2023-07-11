import React, {Component} from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  View,
  Image,
  StyleSheet,
} from 'react-native';
import appStyle from '../../assets/styles/appStyle';
import {ButtonDefault, Header, InputWithText} from '../../components/Action';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import {colors, images, screenWidth} from '../../config/Constant';
import text from '../../assets/styles/text';

export default class MyAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <SafeAreaView style={[appStyle.safeContainer]}>
        <StatusBar barStyle={'dark-content'} backgroundColor={colors.white} />
        <Header back showTitle title={'Terms & Conditions'} />
        <KeyboardAwareScrollView
          contentContainerStyle={appStyle.scrollContainer}
          keyboardShouldPersistTaps="always">
          <View style={[appStyle.wrapper]}>
            <View style={appStyle.pb20}>
              <Text style={[styles.titleView]}>
                PLEASE READ THESE TERMS AND CONDITIONS OF USE CAREFULLY BEFORE
                USING THIS WEBSITE OR MOBILE APPLICATION.
              </Text>
              <Text style={styles.textView}>
                By using accessing this website or this mobile application, you
                signify your assent to these Terms and Conditions. If you do not
                agree to all of these Terms and Conditions, do not use this
                website or mobile application!
              </Text>
              <Text style={styles.textView}>
                Last App Standing, LLC. ("Last App Standing") may revise and
                update these Terms and Conditions at any time. Your continued
                usage of the Last App Standing website, services, and
                applications, Waiter Hailer, Waiter Vendor (the “Digital
                Content”) will mean you accept those changes.
              </Text>
              <Text style={[styles.titleView]}>Use of the Digital Content</Text>
              <Text style={styles.textView}>
                If you violate any of these Terms and Conditions, your
                permission to use the Digital Content automatically terminates
                and you must immediately destroy any copies you have made of any
                portion of the Digital Content and Material.
              </Text>
              <Text style={[styles.titleView]}>
                Liability of Last App Standing and Its Licensors
              </Text>
              <Text style={styles.textView}>
                The use of Last App Standing Digital Content is at your own
                risk. Last App Standing assumes no liability for or relating to
                the delay, failure, interruption, or corruption of any data or
                other information transmitted in connection with use of Last App
                Standing’s Digital Content.
              </Text>
              <Text style={styles.textView}>
                The Last App Standing Digital Content and the Material are
                provided on an "as is" basis. LAST APP STANDING, ITS LICENSORS,
                AND ITS SUPPLIERS, TO THE FULLEST EXTENT PERMITTED BY LAW,
                DISCLAIM ALL WARRANTIES, EITHER EXPRESS OR IMPLIED, STATUTORY OR
                OTHERWISE, INCLUDING BUT NOT LIMITED TO THE IMPLIED WARRANTIES
                OF MERCHANTABILITY, NON-INFRINGEMENT OF THIRD PARTIES' RIGHTS,
                AND FITNESS FOR PARTICULAR PURPOSE. Without limiting the
                foregoing, Last App Standing, its licensors, and its suppliers
                make no representations or warranties about the following:
              </Text>
              <Text style={styles.textView}>
                The accuracy, reliability, completeness, currentness, or
                timeliness of the Content, software, links, or communications
                provided on or through the use of Last App Standing’s Digital
                Content.
              </Text>
              <Text style={styles.textView}>
                The satisfaction of any government regulations requiring
                disclosure of information on prescription drug products or the
                approval or compliance of any software tools with regard to the
                Material contained on Last App Standing’s Digital Content.
              </Text>
              <Text style={styles.textView}>
                In no event shall Last App Standing, its partners, or its, be
                liable for any damages (including, without limitation,
                incidental and consequential damages, personal injury/wrongful
                death, lost profits, or damages resulting from lost data or
                business interruption) resulting from the use of or inability to
                use Last App Standing’s Digital Content or the Material, whether
                based on warranty, contract, tort, or any other legal theory,
                and whether or not Last App Standing, its licensors, its
                suppliers, or any third parties mentioned on Last App Standing’s
                Digital Content are advised of the possibility of such damages.
                Last App Standing, its licensors, its suppliers, or any third
                parties mentioned on Last App Standing’s Digital Content shall
                be liable only to the extent of actual damages incurred by you,
                not to exceed U.S. $1000. Last App Standing, its partners, or
                its licensors, are not liable for any personal injury, including
                death, caused by your use or misuse of the Digital Content and
                its Material. Any claims arising in connection with your use of
                the Digital Content or of any Material must be brought within
                one (1) year of the date of the event giving rise to such action
                occurred. Remedies under these Terms and Conditions are
                exclusive and are limited to those expressly provided for in
                these Terms and Conditions.
              </Text>
              <Text style={[styles.titleView]}>Indemnity</Text>
              <Text style={styles.textView}>
                You agree to defend, indemnify, and hold Last App Standing, its
                officers, directors, employees, agents, licensors, and
                suppliers, harmless from and against any claims, actions or
                demands, liabilities and settlements including without
                limitation, reasonable legal and accounting fees, resulting
                from, or alleged to result from: (a) your use of the Digital
                Content, (b) your volunteered information, (c) your use of or
                reliance on any Material, or (d) your violation of these Terms
                and Conditions
              </Text>
              <Text style={[styles.titleView]}>General</Text>
              <Text style={styles.textView}>
                Last App Standing is based in New Jersey in the United States of
                America with its only principal office in Flanders, NJ. Access
                to the Content may not be legal by certain persons or in certain
                countries. If you access the Last App Standing Network from
                outside the United States, you do so at your own risk and are
                responsible for compliance with the laws of your jurisdiction.
              </Text>
              <Text style={[styles.titleView]}>Jurisdiction</Text>
              <Text style={styles.textView}>
                You expressly agree that exclusive jurisdiction for any dispute
                with Last App Standing, or in any way relating to your use of
                the Last App Standing’s Digital Content, resides in the courts
                of the State of New Jersey and you further agree and expressly
                consent to the exercise of personal jurisdiction in the courts
                of the State of New Jersey in connection with any such dispute
                including any claim involving Last App Standing or its
                affiliates, partners, subsidiaries, employees, contractors,
                officers, directors, telecommunication providers, and content
                providers.
              </Text>
              <Text style={styles.textView}>
                These Terms and Conditions are governed by the internal
                substantive laws of the State of New Jersey, without respect to
                its conflict of laws principles. If any provision of these Terms
                and Conditions is found to be invalid by any court having
                competent jurisdiction, the invalidity of such provision shall
                not affect the validity of the remaining provisions of these
                Terms and Conditions, which shall remain in full force and
                effect. No waiver of any of these Terms and Conditions shall be
                deemed a further or continuing waiver of such term or condition
                or any other term or condition.
              </Text>
              <Text style={[styles.titleView]}>Arbitration</Text>
              <Text style={styles.textView}>
                By agreeing to the Terms and Conditions, you agree that you are
                required to resolve any claim that you may have against Last App
                Standing on an individual basis in arbitration, as set forth in
                this Arbitration Agreement. This will preclude you from bringing
                any class, collective, or representative action against Last App
                Standing, and also preclude you from participating in or
                recovering relief under any current or future class, collective,
                consolidated, or representative action brought against Last App
                Standing by someone else.
              </Text>
              <Text style={[styles.titleView]}>
                Agreement to Binding Arbitration Between You and Last App
                Standing
              </Text>
              <Text style={styles.textView}>
                You and Last App Standing agree that any dispute, claim or
                controversy arising out of or relating to (a) these Terms and
                Conditions or the existence, breach, termination, enforcement,
                interpretation or validity thereof, or (b) your access to or use
                of the Digital Content at any time, whether before or after the
                date you agreed to the Terms and Conditions, will be settled by
                binding arbitration between you and Last App Standing, and not
                in a court of law.
              </Text>
              <Text style={styles.textView}>
                You acknowledge and agree that you and Last App Standing are
                each waiving the right to a trial by jury or to participate as a
                plaintiff or class member in any purported class action or
                representative proceeding. Unless both you and Last App Standing
                otherwise agree in writing, any arbitration will be conducted
                only on an individual basis and not in a class, collective,
                consolidated, or representative proceeding. However, you and
                Last App Standing each retain the right to bring an individual
                action in small claims court and the right to seek injunctive or
                other equitable relief in a court of competent jurisdiction to
                prevent the actual or threatened infringement, misappropriation
                or violation of a party's copyrights, trademarks, trade secrets,
                patents or other intellectual property rights.
              </Text>
              <Text style={[styles.titleView]}>
                Arbitration Rules and Governing Law
              </Text>
              <Text style={styles.textView}>
                The arbitration will be administered by the American Arbitration
                Association ("AAA") in accordance with the AAA’s Consumer
                Arbitration Rules and the Supplementary Procedures for Consumer
                Related Disputes (the "AAA Rules") then in effect, except as
                modified by this Arbitration Agreement. The AAA Rules are
                available at www.adr.org or by calling the AAA at
                1-800-778-7879.
              </Text>
              <Text style={styles.textView}>
                The parties agree that the arbitrator ("Arbitrator"), and not
                any federal, state, or local court or agency, shall have
                exclusive authority to resolve any disputes relating to the
                interpretation, applicability, enforceability or formation of
                this Arbitration Agreement, including any claim that all or any
                part of this Arbitration Agreement is void or voidable. The
                Arbitrator shall also be responsible for determining all
                threshold arbitrability issues, including issues relating to
                whether the Terms and Conditions are unconscionable or illusory
                and any defense to arbitration, including waiver, delay, laches,
                or estoppel.
              </Text>
              <Text style={styles.textView}>
                Notwithstanding any choice of law or other provision in the
                Terms and Conditions, the parties agree and acknowledge that
                this Arbitration Agreement evidences a transaction involving
                interstate commerce and that the Federal Arbitration Act, 9
                U.S.C. § 1 et seq. ("FAA"), will govern its interpretation and
                enforcement and proceedings pursuant thereto. It is the intent
                of the parties that the FAA and AAA Rules shall preempt all
                state laws to the fullest extent permitted by law. If the FAA
                and AAA Rules are found to not apply to any issue that arises
                under this Arbitration Agreement or the enforcement thereof,
                then that issue shall be resolved under the laws of the state of
                New Jersey.
              </Text>
              <Text style={[styles.titleView]}>Arbitration Process</Text>
              <Text style={styles.textView}>
                A party who desires to initiate arbitration must provide the
                other party with a written Demand for Arbitration as specified
                in the AAA Rules. (The AAA provides a form Demand for
                Arbitration - Consumer Arbitration Rules at www.adr.org or by
                calling the AAA at 1-800-778-7879). The Arbitrator will be
                either (1) a retired judge or (2) an attorney specifically
                licensed to practice law in the state of California and will be
                selected by the parties from the AAA's roster of consumer
                dispute arbitrators. If the parties are unable to agree upon an
                Arbitrator within seven (7) days of delivery of the Demand for
                Arbitration, then the AAA will appoint the Arbitrator in
                accordance with the AAA Rules.
              </Text>
              <Text style={[styles.titleView]}>
                Arbitration Location and Procedure
              </Text>
              <Text style={styles.textView}>
                Unless you and Last App Standing otherwise agree, the
                arbitration will be conducted in the county where you reside. If
                your claim does not exceed $10,000, then the arbitration will be
                conducted solely on the basis of documents you and Last App
                Standing submit to the Arbitrator, unless you request a hearing
                or the Arbitrator determines that a hearing is necessary. If
                your claim exceeds $10,000, your right to a hearing will be
                determined by the AAA Rules. Subject to the AAA Rules, the
                Arbitrator will have the discretion to direct a reasonable
                exchange of information by the parties, consistent with the
                expedited nature of the arbitration.
              </Text>
              <Text style={[styles.titleView]}>Arbitrator's Decision</Text>
              <Text style={styles.textView}>
                The Arbitrator will render an award within the time frame
                specified in the AAA Rules. Judgment on the arbitration award
                may be entered in any court having competent jurisdiction to do
                so. The Arbitrator may award declaratory or injunctive relief
                only in favor of the claimant and only to the extent necessary
                to provide relief warranted by the claimant's individual claim.
                An Arbitrator’s decision shall be final and binding on all
                parties. An Arbitrator’s decision and judgment thereon shall
                have no precedential or collateral estoppel effect. If you
                prevail in arbitration you will be entitled to an award of
                attorneys' fees and expenses, to the extent provided under
                applicable law. Last App Standing will not seek, and hereby
                waives all rights Last App Standing may have under applicable
                law to recover attorneys' fees and expenses if Last App Standing
                prevails in arbitration.
              </Text>
              <Text style={[styles.titleView]}>Arbitration Fees</Text>
              <Text style={styles.textView}>
                Your responsibility to pay any AAA filing, administrative and
                arbitrator fees will be solely as set forth in the AAA Rules.
                However, if your claim for damages does not exceed $75,000, Last
                App Standing will pay all such fees, unless the Arbitrator finds
                that either the substance of your claim or the relief sought in
                your Demand for Arbitration was frivolous or was brought for an
                improper purpose (as measured by the standards set forth in
                Federal Rule of Civil Procedure 11(b).
              </Text>
              <Text style={[styles.titleView]}>Arbitration Changes</Text>
              <Text style={styles.textView}>
                Notwithstanding the provisions in Section I above, regarding
                consent to be bound by amendments to these Terms and Conditions,
                if Last App Standing changes this Terms and Conditions after the
                date you first agreed to the Terms and Conditions (or to any
                subsequent changes to the Terms), you may reject any such change
                by providing Last App Standing written notice of such rejection
                within 30 days of the date such change became effective, as
                indicated in the "Effective" date above. This written notice
                must be provided by mail to our main location of business for
                process, listed in the succeeding section. In order to be
                effective, the notice must include your full name and clearly
                indicate your intent to reject changes to this Terms and
                Conditions. By rejecting changes, you are agreeing that you will
                arbitrate any dispute between you and Last App Standing in
                accordance with the provisions of this Terms and Conditions as
                of the date you first agreed to the Terms and Conditions (or to
                any subsequent changes to the Terms and Conditions).
              </Text>
              <Text style={[styles.titleView]}>
                Copyright-Infringement Notice and Takedown Procedures
              </Text>
              <Text style={styles.textView}>
                If you believe any materials accessible on or from the Digital
                Content infringe your copyright, you may request removal of
                those materials (or access thereto) from the Digital Content by
                mailing Last App Standing (identified below) and providing the
                following information:
              </Text>
              <Text style={styles.textView}>
                Identification of the copyrighted work that you believe to be
                infringed. Please describe the work, and where possible include
                a copy or the location (e.g., screenshot) of an authorized
                version of the work.
              </Text>
              <Text style={styles.textView}>
                Identification of the material that you believe to be infringing
                and its location. Please describe the material and provide us
                pertinent information that will allow us to locate the material.
              </Text>
              <Text style={styles.textView}>
                Your name, address, telephone number and (if available) e-mail
                address.
              </Text>
              <Text style={styles.textView}>
                A statement that you have a good faith belief that the
                complained of use of the materials is not authorized by the
                copyright owner, its agent, or the law.
              </Text>
              <Text style={styles.textView}>
                A statement that the information that you have supplied is
                accurate, and indicating that "under penalty of perjury," you
                are the copyright owner or are authorized to act on the
                copyright owner's behalf.
              </Text>
              <Text style={styles.textView}>
                A signature or the electronic equivalent from the copyright
                holder or authorized representative.
              </Text>
              <Text style={styles.textView}>
                Last App Standing method of contact for copyright issues
                relating to the Digital Content is as follows:
              </Text>
              <Text style={styles.textView}>
                americana.europa.robotics@gmail.com
              </Text>
              <Text style={styles.textView}>
                In an effort to protect the rights of copyright owners, Last App
                Standing maintains a policy for the termination, in appropriate
                circumstances, of subscribers and account holders of any and all
                Digital Content who are repeat infringers.
              </Text>
              <Text style={[styles.titleView]}>Severability and Survival</Text>
              <Text style={styles.textView}>
                If any portion of this Terms and Conditions is found to be
                unenforceable or unlawful for any reason, (1) the unenforceable
                or unlawful provision shall be severed from these Terms and
                Conditions; (2) severance of the unenforceable or unlawful
                provision shall have no impact whatsoever on the remainder of
                the Terms and Conditions or the parties’ ability to compel
                arbitration of any remaining claims on an individual basis
                pursuant to the Terms and Conditions; and (3) to the extent that
                any claims must therefore proceed on a class, collective,
                consolidated, or representative basis, such claims must be
                litigated in a civil court of competent jurisdiction and not in
                arbitration, and the parties agree that litigation of those
                claims shall be stayed pending the outcome of any individual
                claims in arbitration.
              </Text>
              <Text style={[styles.titleView]}>Complete Agreement</Text>
              <Text style={styles.textView}>
                Except as expressly provided in a particular "legal notice" on
                Last App Standing’s Digital Content, these Terms and Conditions
                constitute the entire agreement between you and Last App
                Standing with respect to the use of Last App Standing’s Digital
                Content and of its Material.
              </Text>
            </View>
          </View>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  textView: {
    fontSize: 15,
    paddingTop: 15,
    lineHeight: 24,
  },
  titleView: {
    fontSize: 16,
    paddingTop: 15,
    lineHeight: 24,
    fontFamily: 'Poppins-SemiBold',
  },
});
