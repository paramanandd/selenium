/**
 * student service
 */

'use strict';

App.factory('StudentService',['$http','$q',function($http,$q){
	
	return {
        
		fetchAllStudents: function()
		{
        	
            return $http.get('http://localhost:8085/project_rest/rest/students')
                    .then(
                            function(response){
                            	
                                return response.data;
                            }, 
                            function(errResponse){
                                console.error('Error while fetching students list');
                                return $q.reject(errResponse);
                            }
                    );
        },
	
	
	
		fetchStudent: function(id)
		{
			
			return $http.get('http://localhost:8085/project_rest/rest/student/'+id)
					.then(
							function(response){
								return response.data;
							},
							function(errResponse){
								console.error('No student by this id is present');
								return $q.reject(errResponse);
							}
					);
		},
		
		createStudent: function(student)
		{
			return $http.put('http://localhost:8085/project_rest/rest/create',student)
					.then(
							function(response){
                                return response.data;
                            }, 
                            function(errResponse){
                                console.error('Error while creating student');
                                return $q.reject(errResponse);
                            }
					
					);
		},
		
		updateStudent: function(student)
		{
            return $http.post('http://localhost:8085/project_rest/rest/update',student)
                    .then(
                            function(response){
                                return response.data;
                            }, 
                            function(errResponse){
                                console.error('Error while updating student');
                                return $q.reject(errResponse);
                            }
                    );
	    },
	    
	    deleteStudent: function(id){
            return $http.delete('http://localhost:8085/project_rest/rest/delete/'+id)
                    .then(
                            function(response){
                                return response.data;
                            }, 
                            function(errResponse){
                                console.error('Error while deleting student');
                                return $q.reject(errResponse);
                            }
                    );
    }
	    
	    
		
	};
}]);