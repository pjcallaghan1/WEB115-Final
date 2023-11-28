document.getElementById("submit").addEventListener('click', function(event) {

    //email validation
    event.preventDefault();
    email = document.getElementById("email").value.trim()
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email)){
        mealPlanner();
    } else {
        alert('Please enter a valid email address.');
    }
});

// Writes everything to new tab
function mealPlanner() 
{
    fullname = document.getElementById('name').value;
    email = document.getElementById('email').value;
    goal = document.getElementById('goal').value;

    // Breakfast
    bfMon = document.getElementById('bfMon').value;
    bfTue = document.getElementById('bfTue').value;
    bfWed = document.getElementById('bfWed').value;
    bfThur = document.getElementById('bfThur').value;
    bfFri = document.getElementById('bfFri').value;
    bfSat = document.getElementById('bfSat').value;
    bfSun = document.getElementById('bfSun').value;

    // Snack 1
    sn1Mon = document.getElementById('sn1Mon').value;
    sn1Tue = document.getElementById('sn1Tue').value;
    sn1Wed = document.getElementById('sn1Wed').value;
    sn1Thur = document.getElementById('sn1Thur').value;
    sn1Fri = document.getElementById('sn1Fri').value;
    sn1Sat = document.getElementById('sn1Sat').value;
    sn1Sun = document.getElementById('sn1Sun').value;

    // Lunch
    lunMon = document.getElementById('lunMon').value;
    lunTue = document.getElementById('lunTue').value;
    lunWed = document.getElementById('lunWed').value;
    lunThur = document.getElementById('lunThur').value;
    lunFri = document.getElementById('lunFri').value;
    lunSat = document.getElementById('lunSat').value;
    lunSun = document.getElementById('lunSun').value;

    // Snack 2
    sn2Mon = document.getElementById('sn2Mon').value;
    sn2Tue = document.getElementById('sn2Tue').value;
    sn2Wed = document.getElementById('sn2Wed').value;
    sn2Thur = document.getElementById('sn2Thur').value;
    sn2Fri = document.getElementById('sn2Fri').value;
    sn2Sat = document.getElementById('sn2Sat').value;
    sn2Sun = document.getElementById('sn2Sun').value;

    // Dinner
    dinMon = document.getElementById('dinMon').value;
    dinTue = document.getElementById('dinTue').value;
    dinWed = document.getElementById('dinWed').value;
    dinThur = document.getElementById('dinThur').value;
    dinFri = document.getElementById('dinFri').value;
    dinSat = document.getElementById('dinSat').value;
    dinSun = document.getElementById('dinSun').value;

    mpText = ('<html>\n');
    mpText += ('<head>\n<style>\nbody {background-color:#F8D4BA}\ntable, th, td {border: 1px solid black; border-collapse: collapse; text-align: center;}\nth {height: 75px; width: 150px}\n</style>\n');
    mpText += ('<title>' + fullname + "'s Meal Plan</title>\n");
    mpText += ("<h1>" + fullname +"'s Meal Plan</h1>\n");
    mpText += ('<h2>' + email + '<br>\nGoal of the Week: ' + goal + '</h2>\n</head>\n');
    mpText += ('<body>\n<table>\n');
    mpText += ('<tr>\n<th></th>\n');
    mpText += ('<th>Monday</th>\n<th>Tuesday</th>\n<th>Wednesday</th>\n<th>Thursday</th>\n<th>Friday</th>\n<th>Saturday</th>\n<th>Sunday</th>\n</tr>\n');
    mpText += ('<tr>\n<th>Breakfast</th>\n' + '<td>' + bfMon + '</td>\n' + '<td>' + bfTue + '</td>\n' + '<td>' + bfWed + '</td>\n' + '<td>' + bfThur + '</td>\n' + '<td>' + bfFri + '</td>\n' + '<td>' + bfSat + '</td>\n' + '<td>' + bfSun + '</td>\n');
    mpText += ('<tr>\n<th>Morning Snack</th>\n' + '<td>' + sn1Mon + '</td>\n' + '<td>' + sn1Tue + '</td>\n' + '<td>' + sn1Wed + '</td>\n' + '<td>' + sn1Thur + '</td>\n' + '<td>' + sn1Fri + '</td>\n' + '<td>' + sn1Sat + '</td>\n' + '<td>' + sn1Sun + '</td>\n');
    mpText += ('<tr>\n<th>Lunch</td>\n' + '<th>' + lunMon + '</td>\n' + '<td>' + lunTue + '</td>\n' + '<td>' + lunWed + '</td>\n' + '<td>' + lunThur + '</td>\n' + '<td>' + lunFri + '</td>\n' + '<td>' + lunSat + '</td>\n' + '<td>' + lunSun + '</td>\n');
    mpText += ('<tr>\n<th>AfternoonSnack</th>\n' + '<td>' + sn2Mon + '</td>\n' + '<td>' + sn2Tue + '</td>\n' + '<td>' + sn2Wed + '</td>\n' + '<td>' + sn2Thur + '</td>\n' + '<td>' + sn2Fri + '</td>\n' + '<td>' + sn2Sat + '</td>\n' + '<td>' + sn2Sun + '</td>\n');
    mpText += ('<tr>\n<th>Dinner</td>\n' + '<th>' + dinMon + '</td>\n' + '<td>' + dinTue + '</td>\n' + '<td>' + dinWed + '</td>\n' + '<td>' + dinThur + '</td>\n' + '<td>' + dinFri + '</td>\n' + '<td>' + dinSat + '</td>\n' + '<td>' + dinSun + '</td>\n</table\n');
    mpText += ('</body>\n</html>');

    newWindow = window.open('about:blank', 'myPop', 'width=1000,height=1000');
    newWindow.document.write(mpText);
}